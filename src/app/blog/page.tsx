import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';

export default async function BlogPage() {
  const filePath = path.join(process.cwd(), 'post1.md');
  const content = fs.readFileSync(filePath, 'utf8');

  return (
    <div className="blog-container">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}