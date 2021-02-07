# AnimeGoNotifier Telegram Bot

AnimeGo Notifier - bot is a notifier about new anime updates to which you are subscribed to on the [AnimeGo](https://animego.org/)

![GitHub Logo](./assets/header.jpg)

# Features!

  
  - Fetch watching anime (from [AnimeGo/watching](https://animego.org/user/Cucci%20Flex/mylist/anime/watching)) about anime updates and send them by bot in telegram. [Main feature]
# Example

![GitHub Logo](./assets/example.jpg)


# Deploy

- Update data in "config_example.js" file
- Create a new app on Heroku
- Connect your repo to Heroku
- Add add-on "Heroku Redis" (this add-on will be used to save the data)
- Add add-on "Heroku Scheduler" (this add-on will be used to trigger the app handler)
- Create new schedule in Heroku Scheduler add-on
- Deploy app.
 