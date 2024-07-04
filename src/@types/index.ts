interface Search {
  searchQuery: string
}

interface SearchGitHubUser {
  login: string
  id: number
  avatar_url: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  type: string
}

interface SearchResult {
  total_count: number
  items: SearchGitHubUser[]
}

interface GitHubUser extends SearchGitHubUser {
  name: string
  company: string | null
  blog: string
  location: string | null
  email: string | null
  bio: string | null
  public_repos: number
  followers: number
  following: number
  created_at: string
  organizations_url: string
  repos_url: string
  type: string
}
