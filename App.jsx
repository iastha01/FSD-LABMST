import { useState } from "react";
import "./App.css";

function App() {
  const [post, setPost] = useState("");
  const [platform, setPlatform] = useState("Twitter");

  const limit = platform === "Twitter" ? 280 : 3000;
  const remaining = limit - post.length;

  return (
    <div className="app">
      <div className="composer">
        <h1>✨ Post Composer</h1>
        <p className="subtitle">Create and validate your social media post</p>

        <label>Select Platform</label>

        <select
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
        >
          <option value="Twitter">🐦 Twitter</option>
          <option value="LinkedIn">💼 LinkedIn</option>
        </select>

        <label>Write your post</label>

        <textarea
          value={post}
          onChange={(e) => setPost(e.target.value)}
          placeholder="What's on your mind?"
          rows="8"
        />

        <div className="bottom">
          <span>
            {post.length} / {limit} characters
          </span>

          <span className={remaining < 0 ? "danger" : "remaining"}>
            {remaining} remaining
          </span>
        </div>

        {post.length > limit && (
          <div className="error">
            ⚠️ Your post exceeds the {platform} limit!
          </div>
        )}

        <button disabled={post.length === 0 || post.length > limit}>
          Publish Post
        </button>
      </div>
    </div>
  );
}

export default App;