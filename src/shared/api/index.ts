import ky from 'ky'

export class Api {
  private static kyClient = ky.create({
    prefixUrl: 'https://api.github.com/',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
    },
  })

  static getUser(username: string): Promise<GitHubUser> {
    return this.kyClient.get(`users/${username}`).json()
  }

  static searchUser(querySearch: string): Promise<SearchResult> {
    return this.kyClient.get(`search/users?q=${querySearch}`).json()
  }

  static getRepositoryOfUser(username: string) {
    return this.kyClient.get(`users/${username}/repos`).json()
  }

  static getRepositoryInfo(owner: string, repository: string) {
    return this.kyClient.get(`repos/${owner}/${repository}`).json()
  }

  static getRepositoryLanguages(owner: string, repository: string) {
    return this.kyClient.get(`repos/${owner}/${repository}/languages`).json()
  }

  static getStarredRepositories(username: string) {
    return this.kyClient.get(`repos/${username}/starred`).json()
  }
}
