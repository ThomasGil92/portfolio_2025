import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const repoFullNames = [
      "ThomasGil92/next_better-auth_shadcn",
      "ThomasGil92/documentary_ai_frontend",
      "ThomasGil92/documentary_ai_backend"
    ];

    const headers: HeadersInit = {
      'Accept': 'application/vnd.github.v3+json',
      'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`,
    };

    const repoPromises = repoFullNames.map(repoFullName =>
      fetch(`https://api.github.com/repos/${repoFullName}`, { 
        headers,
        next: { revalidate: 3600 } // Cache for 1 hour
      })
    );

    const responses = await Promise.all(repoPromises);
    const data = await Promise.all(responses.map(res => res.json()));

    // Check for any errors in the responses
    const hasError = data.some(repo => repo.message);
    if (hasError) {
      throw new Error('Failed to fetch one or more repositories');
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('GitHub API Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch GitHub repositories' },
      { status: 500 }
    );
  }
}
