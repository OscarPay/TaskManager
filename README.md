# README

Commands to Reproduce this projects

`rails new organizador -T --database=postgresql`
`rails g simple_form:install --bootstrap`
`rails g scaffold Category name description:text`
`rails g scaffold Task name description:text due_date:date category:references`
`rails db:create`
`rails db:migrate`
`docker run -p 5432:5432 --name postgres -e POSTGRES_PASSWORD=postgres -d postgres`
`annotate --models`
`i18n-tasks add-missing`
`rails g devise:install`
`rails g devise User`
`rails g migration AddOwnerToTask user:references`
`rails g model Participant role:integer user:references task:references`
`yarn add github:nathanvda/cocoon#c24ba53`
`rails g cancan:ability`
`rails g migration AddCodeToTask code`
`rails db:reset`
`rails db:seed`
`rails g mailer ParticipantMailer`
