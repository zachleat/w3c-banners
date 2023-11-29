class W3CBanner extends HTMLElement {
	static register(tagName = "w3c-banner", registry) {
		if ("customElements" in window) {
			(registry || customElements).define(tagName, this);
		}
	}

	static attrs = {
		text: "text",
		color: "color",
	};

	static style = `
:host {
	--_wb-color: var(--wb-color, #00599b);
	display: block;
	position: absolute;
	left: 0;
	top: 0;
	min-width: 20em;
	background: var(--_wb-color);
	color: #fff;
	text-align: right;
	font: lighter 1.1875em Gill Sans, Gill Sans MT, Calibri, sans-serif;
	padding: .1em 2em .1em 0;
	box-sizing: border-box;
	transform-origin: top left;
	transform: translateY(20em) rotate(270deg);
}
:host([color="green"]) {
	--_wb-color: #00a400;
}
:host([color="red"]) {
	--_wb-color: #ff0000;
}
:host([color="black"]) {
	--_wb-color: #000;
}
`;

	connectedCallback() {
		if (!("replaceSync" in CSSStyleSheet.prototype) || this.shadowRoot) {
			return;
		}

		let shadowroot = this.attachShadow({ mode: "open" });

		let sheet = new CSSStyleSheet();
		sheet.replaceSync(W3CBanner.style);
		shadowroot.adoptedStyleSheets = [sheet];

		shadowroot.innerHTML = `<slot>${this.getAttribute(W3CBanner.attrs.text)}</slot>`;
	}
}

W3CBanner.register();
