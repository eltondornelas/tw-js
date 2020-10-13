const listElement = document.querySelector('#list');
const searchInput = document.querySelector('#search');

let listItems = [
	{
		full_name: 'JavaScript 1',
		created_at: '2020-07-25T20:10:50Z',
		forks: 15300
	},
	{
		full_name: 'JavaScript 2',
		created_at: '2020-07-25T20:10:50Z',
		forks: 18300
	},
	{
		full_name: 'JavaScript 3',
		created_at: '2020-07-25T20:10:50Z',
		forks: 2570
	}
]

function render(){
	let html = '';
	listItems.forEach(item => {
		html += `
			<li>
				<div>
					<b>Name:</b> ${item.full_name}
				</div>
				<div>
					<b>Created At:</b> ${item.created_at}
				</div>
				<div>
					<b>Forks:</b> ${item.forks}
				</div>
			</li>
		`;
	})
	listElement.innerHTML = html;
}

render();