module.exports = plop => {
	plop.setGenerator('module', {
		description: 'Create new express module with mongo',
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
			{
				type: 'add',
				path: 'src/modules/{{dashCase name}}/{{dashCase name}}-routes.ts',
				templateFile: 'plop-templates/routes.ts.hbs',
			},
			{
				type: 'add',
				path: 'src/modules/{{dashCase name}}/{{dashCase name}}-controller.ts',
				templateFile: 'plop-templates/controller.ts.hbs',
			}
		],
	});
};