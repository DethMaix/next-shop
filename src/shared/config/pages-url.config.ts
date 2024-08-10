class PUBLIC {
	private root = '/'

	HOME = this.root
	// AUTH = `${this.root}/auth`
	AUTH = `${this.root}auth`
}

export const PUBLIC_PAGES = new PUBLIC()

// TODO:
class DASHBOARD {
	private root = '/pr'

	HOME = this.root
	TASKS = `${this.root}/tasks`
}

export const DASHBOARD_PAGES = new DASHBOARD()
