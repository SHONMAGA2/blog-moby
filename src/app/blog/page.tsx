export default function BlogPage() {
  return (
    <div className="blog-container">
      {/* Title */}
      <h1 className="blog-title">Deep Dive Into Moby-Dick</h1>

      {/* Metadata */}
      <p className="blog-meta">
        <strong>Posted By:</strong> Ivyne Muzenda &nbsp;|&nbsp; <strong>Date:</strong> 02/09/2025
      </p>

      {/* 3-column content table */}
      <table className="blog-table">
        <thead>
          <tr>
            <th>The Beginning</th>
            <th>The Middle</th>
            <th>The End</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              In the beginning of <em>Moby-Dick</em>, Ishmael, the narrator, introduces himself. He gives a clear background of his restless urge to go out to sea whenever he feels depressed or trapped on land. Seeking adventure and escape, he joins a whaling voyage out of New Bedford, Massachusetts, setting the stage for the epic journey that follows.
            </td>
            <td>
              As the novel progresses, Ishmael and his new crew settle into life aboard the whaling ship <em>Pequod</em>. We get to know Captain Ahab and his obsession with hunting a sperm whale, Moby-Dick, the creature that took his leg. The story alternates between day-to-day details of whaling life—dangers of the sea, rituals of hunting, a mix of cultures among sailors—and Ahab's growing obsession to find and kill the whale at any cost.
            </td>
            <td>
              In the final part of the novel, Ahab finally encounters Moby-Dick. A massive, deadly chase unfolds across the open sea. Despite the crew’s efforts, Ahab’s obsession carries them to disaster. <em>Pequod</em> is destroyed by the whale, killing the crew. Ishmael, who clings to a lifeboat floating alone at sea, survives and lives to tell the story, marking the end of his adventures at sea.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}