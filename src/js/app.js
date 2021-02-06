import MainMenu from './UI/MainMenu';
import '../sass/style.scss';

const firstMenuContent = {
	heading: 'create <span class="lower">a</span> form',
	subheading: 'Create an amazing form to collect data easily.',
	// options: [
	// 	{
	// 		title: 'create from scratch';
	// 		icon: '<i class="fas fa-plus"></i>',
	// 	},
	// ],
	options: [
		{
			title: 'create from scratch',
			icon: '<i class="fas fa-plus"></i>',
		},
		{
			title: 'use template',
			icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 147" class="create-settings__icon" width="120" height="147"><g fill="none"><rect fill="#FFF" width="120" height="146.301" rx="4"></rect><rect fill="#4675E2" x="8" y="8" width="103.562" height="34.521" rx="4"></rect><circle fill="#FED049" cx="27.5" cy="25.5" r="9.5"></circle><path fill="#2EBC70" d="M85.5 23L106 43H65z"></path><path fill="#35DC86" d="M61.5 23L82 43H41z"></path><path d="M11.041 51.315h45.78a3 3 0 013 3v3.041a3 3 0 01-3 3h-45.78a3 3 0 01-3-3v-3.04a3 3 0 013-3z" fill="#C6CDD9"></path><rect fill="#C6CDD9" x="8.041" y="87.479" width="51.781" height="9.041" rx="3"></rect><rect fill="#A7B1C0" x="8" y="67" width="103.562" height="9.041" rx="3"></rect><rect fill="#A7B1C0" x="8" y="103" width="103.562" height="9.041" rx="3"></rect></g></svg>'
		},
		{
			title: 'import form',
			icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 147" class="create-settings__icon" width="120" height="147"><g fill="none"><rect fill="#FFF" width="120" height="146.301" rx="4"></rect><path d="M12 8h95.562a4 4 0 014 4v21a4 4 0 01-4 4H12a4 4 0 01-4-4V12a4 4 0 014-4z" fill="#8CA5DF"></path><path d="M11 45.47h97.562a3 3 0 013 3v3.04a3 3 0 01-3 3H11a3 3 0 01-3-3v-3.04a3 3 0 013-3zm0 35.02h39a3 3 0 013 3v3.04a3 3 0 01-3 3H11a3 3 0 01-3-3v-3.04a3 3 0 013-3z" fill="#C6CDD9"></path><rect fill="#A7B1C0" x="8" y="62.979" width="103.562" height="9.041" rx="3"></rect><path d="M11 98h39a3 3 0 013 3v3.041a3 3 0 01-3 3H11a3 3 0 01-3-3V101a3 3 0 013-3z" fill="#A7B1C0"></path><circle fill="#4675E2" cx="85" cy="110" r="26"></circle><path d="M93.936 114.255a1.786 1.786 0 012.548 0 1.826 1.826 0 010 2.545l-10.676 10.666c-.33.33-.79.534-1.298.534-.509 0-.968-.204-1.3-.534L72.535 116.8a1.782 1.782 0 010-2.545 1.786 1.786 0 012.547 0l7.619 7.637v-27.11c-.002-.993.814-1.782 1.807-1.782.994 0 1.784.789 1.784 1.782v27.108l7.644-7.635z" stroke="#FFF" fill="#FFF"></path></g></svg>'
		}
	]
}

const mainMenu = new MainMenu('main-menu-wrapper', firstMenuContent);