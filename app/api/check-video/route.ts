import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const fileName = searchParams.get('fileName');

  if (!fileName) {
    return NextResponse.json({ exists: false }, { status: 400 });
  }

  const filePath = path.join(process.cwd(), 'public/upload', fileName);

  try {
    await fs.promises.access(filePath, fs.constants.F_OK);
    return NextResponse.json({ exists: true });
  } catch (error) {
    return NextResponse.json({ exists: false });
  }
}
