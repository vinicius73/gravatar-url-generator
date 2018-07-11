/* eslint-disable no-console */

import { register } from 'register-service-worker'

const dispatchEvent = (name, timeout = 8000) => {
  setTimeout(() => {
    document.dispatchEvent(new Event(name))
  }, timeout)
}

window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent Chrome <= 67 from automatically showing the prompt
  event.preventDefault()
  // Show the modal add to home screen dialog
  event.prompt()

  event.userChoice.then((choice) => {
    dispatchEvent(`install:${choice.outcome}`)
  })
})

const common = {
  updated (registration) {
    dispatchEvent('sw:update')
    dispatchEvent('sw:update', 8000 * 5)
  },
  registered (registration) {
    registration.update()
  },
  error (error) {
    dispatchEvent('sw:error')
    console.error('Error during service worker registration:', error)
  }
}

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ...common,
    ready () {
    // console.log('Service worker is active.')
    },
    cached (registration) {
    // console.log('Content has been cached for offline use.')
    },
    offline () {
      console.log('No internet connection found. App is running in offline mode.')
    }
  })
}
