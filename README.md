0 introduction full stack path
	https://youtu.be/o1Ka2i_3O2w
1 keyboard skill
	https://www.youtube.com/watch?v=60BZ-Rm0yXw
2 git: 
	initial:
		1 git init
		2 git remove add origin "github/gitlab repo url"
		3 git add .
		4 git commit -m "your message what you have done in this commit"
		5 git push origin master

	feature-branch
		1 git checkout master
		2 git fetch
		3 git pull origin master
		4 git checkout -b "#001-create-migration-user-in-database"
		5 git add .
		6 git commit -m "#001-create-migration-user-in-database: added new migration"
		7 git push origin #001-create-migration-user-in-database
		8 create a pull request (merge request) and assign your manager as reviewer
		9 merge it
		10 git checkout master, fetch, pull 

B2
	solve conflicts
		- Deploy develop to staging:
		1 git fetch
		2 git checkout develop
		3 git pull
		4 git checkout staging
		5 git pull
		6 git checkout -b dev-to-staging-2026-01-23 (create this middle branch from staging, increase its verion)
		7 git merge develop
			(solve conflicts by these commands to accept current changes from develop)
		8 git checkout --ours . (OR git restore --source=HEAD --ours .) (these are same)
		9 git add .
		10 git commit
		11 git push origin dev-to-staging-2026-01-23
		12 Create PR From dev-to-staging-2026-01-23 to staging
			(DO NOT MERGE IT TO DEVELOP, we need it only merged to staging)
		13 create PR From develop to staging (Or use the current one you already created before start merging)




3 how to research to find out what should be stack (what language to learn 2026) 
4 how to initialize a project (react, next, angular, vue, fastApi, Spring boot, nestJs)
5 initialize frontend project
6 uikit - storybook: button, inputs, table, forms, card, filters, toast...
7 eslint, prettier, huskey
8 run tests, unit test, integration test, e2e
9 defining tasks
10 when you are bored, stress on finish that task, how to start working on your task
11 code review (principles)
12 CI/CD
13 Sutuping a server, installing git, node, npm, ...
14 routing in frontend
15 how to develop a uikit, with sample, with initialization code: uikit
16 shadcn (uikit > 100K)
17 how to develop a form component
18 how to write down the apis
19 how to create a useCrud hook 
20 state-managements, jotai
21 portals
22 virtualization
23 performance enhancing, analysing
24 CarSeller
	call the api from json-server
	list of registered cars
		filters
		sorting
		pagination
		handling (no data could find for you, please change the filters)
		loading
		actions (edit/delete/active-toggle)
	form to add/update cars
		title,
		model,
		description,
		active,
		image
		owners: [{first name, last name, gender, phone, email, address (autocomple from google api)}]
	delete cars
	print 
25 best practices about designing components:
	Card
	date format
	price format
	toast
	container
	responsive
	filters
	tables
	form
	confirmation
	exception handler
27 clean code
28 backend
29 create a fastApi project
30 exception handler
31 routing
32 bootstraping app
33 controller
34 service
35 reposotory
36 model
37 event listeners
38 design patters:
39 resource 
40 validation
41 email
42 sms
43 call external service
44 call internal service
45 query, filtering, sorting, pagination
46 uploading image files
47 rabbit mq



