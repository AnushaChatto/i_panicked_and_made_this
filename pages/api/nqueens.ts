import type { NextApiRequest, NextApiResponse } from "next";

// Check if placing a queen at (row, col) is safe
function isSafe(board: number[], row: number, col: number): boolean {
  for (let i = 0; i < row; i++) {
    const c = board[i];
    if (c === col || Math.abs(c - col) === row - i) return false;
  }
  return true;
}

// Global variable to store the first solution
let firstSolution: number[] | null = null;

// Recursive N-Queens solver that counts solutions
function solveNQueensCount(n: number, row = 0, board: number[] = []): number {
  if (row === n) {
    // Save the first solution
    if (!firstSolution) {
      firstSolution = [...board]; 
    }
    return 1; 
  }

  let count = 0;
  for (let col = 0; col < n; col++) {
    if (isSafe(board, row, col)) {
      board[row] = col;
      count += solveNQueensCount(n, row + 1, board);
    }
  }
  return count;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const n = Number(req.query.n) || 0;

  if (n <= 0 || n > 12) {
    res.status(400).json({ error: "n must be between 1 and 12" });
    return;
  }

  // Reset firstSolution before calculation
  firstSolution = null;

  const count = solveNQueensCount(n);

  res.status(200).json({
    n,
    count,
    firstSolution, // <-- include the first solution in the response
  });
}
