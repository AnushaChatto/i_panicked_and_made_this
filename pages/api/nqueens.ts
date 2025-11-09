import type { NextApiRequest, NextApiResponse } from "next";

// N-Queens solver that counts solutions only
function isSafe(board: number[], row: number, col: number): boolean {
  for (let i = 0; i < row; i++) {
    const c = board[i];
    if (c === col || Math.abs(c - col) === row - i) return false;
  }
  return true;
}

function solveNQueensCount(n: number, row = 0, board: number[] = []): number {
  if (row === n) return 1; // valid solution
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

  if (n <= 0 || n > 16) {
    res.status(400).json({ error: "n must be between 1 and 20" });
    return;
  }

  const count = solveNQueensCount(n);
  res.status(200).json({ n, count });
}
