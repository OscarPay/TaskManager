# README

Commands to Reproduce this projects

`rails new organizador -T --database=postgresql`
`rails g simple_form:install --bootstrap`
`rails g scaffold Category name description:text`
`rails g scaffold Task name description:text due_date_date category:references`
`docker run -p 5432:5432 --name postgres -e POSTGRES_PASSWORD=postgres -d postgres`
`annotate --models`
`i18n-tasks add-missing`
