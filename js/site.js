var BR_PROJECTS = [
	'JSON', 
	'SQL', 
	'Redis', 
	'RookScript', 
	'ArcheText', 
	'Expression', 
	'FileSystem',
	'Small'
];

var PROJECTS_ELEMENT = $Q1('.site-projects');

$Q1('body').onload = function()
{
	$E(BR_PROJECTS,(e)=>{
		PROJECTS_ELEMENT.appendChild(
			$Element('a', {"href": e}, [
				$Element('div', {"class": 'w3-button w3-center'}, [
					$Element('img', {"class": 'site-project-logo', "src": e + '/logo.svg'}), 
					$Text(e)
				])
			])
		);
	});
	$IncludeHTML();
};
