module.exports = plop => {
	plop.setGenerator('module', {
		description: 'Create a new express module',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'New module name?'
			},
		],
		actions: [
			{
				type: 'add',
				path: 'src/modules/{{dashCase name}}/I{{pascalCase name}}Document.ts',
				templateFile: 'plop-templates/interface.ts.hbs',
			},
			{
				type: 'add',
				path: 'src/modules/{{dashCase name}}/{{dashCase name}}-model.ts',
				templateFile: 'plop-templates/model.ts.hbs',
			},
		],
	});
};