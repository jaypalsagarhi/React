# React

or create a new repository on the command line
echo "# React" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/jaypalsagarhi/React.git
git push -u origin main

…or push an existing repository from the command line
git remote add origin https://github.com/jaypalsagarhi/React.git
git branch -M main
git push -u origin main


npm init
npm install -D parcel
 # Parcel is bundler to bundle the things we use parcel
 # node modules
^ - minor verson update in react 
~ - major version update in react
without ^ and ~ not update required fix version 
package.json maintains the versions of dependencies not the exact versions
package.lock.json - manage transitive dependency (dependency of dependency) dependency tree

because on packegage can have their own lots of dependencies
every package has its own package.json 

We no need to push node_modules in github 
We can regenerate node_modules from package.json file
we can push packegage.json and packegage.lock.json in github
whatever we can regenerate no need to put on git
#npx parcel index.html - Develpmnet build
     created development build and hosted on localhost:1234
	:npx means execute a package
	
	# Parcel 
	
			-Dev Build
			-Local Server
			-HMR - Hot Module Replacement (Auto page refresh)
			-File Watching Algoritham  written in C++
			-Caching - Faster builds(parcel cache folder ) - caching all the things
			-Image optimization
			-Minification 
			-Buldling
			-Compress
			-Remove Whitespace
			-Remove console from application
			-Consistent hashing
			-Code Splitting
			-Diffrential Bundling
			-Diagnostics - 
			-Error handling
			-Host application on HTTPS
			-Remove unused code 
			-Tree shaking
			-Diffrent Dev and Production building
	
	# npx parcel build index.html - Productuion build
	while creating development build from app.js we have to remove "main": "app.js",
	
	production build will generate inside dist folder
	
	dist
	parcel.cache
	node modules we need to put in .ignore file
	
	
	npm run start OR npm start - to create development build - which calls -> parcel index.html
	npm run build  OR npm parcel build index.html
	JSX
	Babel - transpiler
	Parcel
	
	
	
	#JSX  (transpiled it before it reaches the JS) - PARCEL - Babel
	JSX => Babel transpiles it to React.createElement => ReactElement- JS Object => HTMLElement(render)
	
	if we have to give attribute in JSX we have to use camelCase like className or tabIndex  
	
	
	React Component
	
	Class based Component - Old way of writing code
	Functional component -  New way of writing code
	
	
	React Component: Normal js fucntion which returns some piece if jsx or react element
	
	
	
     	