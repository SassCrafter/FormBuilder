import Component from '../Helpers/Component';

export default class extends Component {
	constructor(hookId, content) {
		super(hookId);
		this.content = content;
		this.render();
	}

	createMenuOptions() {
		const optionsWrapper = this.createElement('div', 'flex create-settings__options');
		const { options } = this.content;
		options.forEach(option => {
			const optionEl = this.createMenuOption(option);
			optionsWrapper.appendChild(optionEl);
		});
		console.log(optionsWrapper)
		return optionsWrapper;
	}

	createMenuOption(el) {
		console.log(el.title);
			const optionEl = document.createElement('div');
			optionEl.className = 'flex-item create-settings__option';

			optionEl.innerHTML = `
				<div class="icon-wrapper">
					${el.icon}
				</div>
				<div class="text-wrapper">
					<h3>${el.title}</h3>
				</div>
			`;
			return optionEl;
	}


	render() {
		console.log('Rendering');
		this.menuEl = this.createRootEl('section', 'create-settings');
		console.log(this.menuEl);
		this.menuEl.innerHTML = `
			<div class="text">
				<h2 class="heading">${this.content.heading}</h2>
				<p class="subheading">${this.content.subheading}</p>
			</div>
		`;
		this.menuEl.appendChild(this.createMenuOptions());
	}
}