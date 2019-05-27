# OpenShop

OpenShop is e-commerce service provider directed to small businesses to allow them to build their online shopping presence. Vendors can easily add and edit shop products to be sold online. Consumers are able to access stores advertised by companies and shop what they want.

## Libraries
OpenShop is built with the following:
- [create-react-app](https://github.com/facebook/create-react-app)
- [Redux](https://github.com/reduxjs/redux) manages state management
- [React Router](https://github.com/ReactTraining/react-router) handles component navigation based on the URL/history
- [Recharts](https://github.com/recharts/recharts) is used to animate and display transactional data on the page
- [Semantic UI React](https://github.com/Semantic-Org/Semantic-UI-React) is used for styling
- [Amazon Web Services S3](https://aws.amazon.com/s3/) used to host all store/product images
- [Ruby on Rails](https://rubyonrails.org/) used for the API back-end

## Installation

Fork and clone this repository to your local machine, ```cd``` into the the server folder, and run ```bundle install```.
Make sure you have [postgreSQL](https://postgresapp.com/) installed and running on your local machine. Run ```rake db:create && rake db:migrate``` to create your database and established the existing schemas. You can run ```rake db:seed``` if you wish to seed your local repository with my placeholder data. Finishing these steps make sure to set-up an Amazon Web Service (AWS) account and create a bucket for the Simple Storage Service. Once that is set-up run ```rails credentials:edit``` to access your credentials files and insert your AWS access keys, secret access key, region, and bucket into the file. As well as setting up a JWT key inside. Once this is complete, run ```rails s``` to start your locally-hosted back-end. Once your back-end is set-up, ```cd``` into the client folder and run ```npm install```, then ```npm start```. You can now create a new account or using an existing account in the seeded data to start your OpenShop journey.

## Future Development

Implementing Stripe, PayPal or another online payment processing system for check-out feature.
