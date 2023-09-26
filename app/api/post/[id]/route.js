import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function DELETE(request, { params }) {
	const { id } = params;
  
  const post = await prisma.post.delete({
    where: {
      id,
    }
  });

  return NextResponse.json(request);
}
