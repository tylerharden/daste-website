# daste.world

Welcome to the official website of daste. 
This project is a React-based application that includes music, tour, store, and contact pages.

---

## Table of Contents

- [Features](#features)
- [File Structure](#file-structure)
- [License](#license)
- [Contact](#contact)

---

## Features

- Responsive design for different screen sizes.
- Theme selector to switch between different color themes.
- Spotify embeds for music releases.
- Contact form and social media links.
- Songkick widget for tour dates.
- Dynamic header with logo and navigation.

---

### Redirect

The **Redirect** feature provides a trackable link that sends users to an external ticketing or campaign URL while appending UTM parameters for analytics tracking and firing Facebook Pixel events.

**Example usage:**
```
https://daste.world/redirect?url=https://www.moshtix.com.au/v2/event/daste-dasteworld-australia-tour/183815&campaign=dasteworldAUS25&source=facebook
```
When accessed, this URL will:

1. **Read query parameters** from the link:
   - `url` – the base destination (**required**)
   - `campaign` – the campaign identifier (**required**)
   - `source` – traffic source (optional; defaults to `meta`)
   - `medium` – automatically set to `paid_social`
   
2. **Construct the final destination URL** by appending UTM parameters for analytics tracking:
```
https://www.moshtix.com.au/v2/event/daste-dasteworld-australia-tour/183815
?utm_source=facebook
&utm_medium=paid_social
&utm_campaign=dasteworldAUS25
```

3. **Fire Facebook Pixel** (`fbq('track', 'Tickets Link')`) for tracking ad conversions.

4. **Delay for 3 seconds** to display a short “Hang tight...” message before redirecting.

5. **Provide a fallback link** (`Buy Tickets` button) in case the user wants to click manually.

#### How it Works
- Implemented as a React component using `useSearchParams` from `react-router-dom`.
- Uses **Framer Motion** for simple fade-in and motion effects.
- Reads and builds the redirect URL dynamically from the query parameters.
- Automatically applies tracking parameters without having to hardcode them in the original campaign links.
- Styles are handled via `redirect.css`.


#### Example Flow
1. Marketing posts a link:
```
https://daste.world/redirect?url=<ticket_url>&campaign=<campaign_name>&source=facebook
```
2. User clicks the link.
3. Page shows:
- “Hang tight...”
- “We’re taking you to the tickets”
- A `Buy Tickets` button
4. Facebook Pixel event fires.
5. User is automatically redirected to the ticket site with appended tracking parameters.

---

## File Structure

The project structure is as follows:

```
daste.world/
├── public/
│   ├── assets/
│   │   ├── daste.-LogoBlack.png
│   │   ├── daste.-LogoOffWhite.png
│   │   ├── daste.-LogoOrange.png
│   │   └── other assets...
│   ├── fonts/
│   │   └── Helvetica-73-Extended-Bold.ttf
│   ├── index.html
│   └── other public files...
├── src/
│   ├── components/ 
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   ├── styles.css
├── package.json
└── README.md
```

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contact

For any inquiries, please contact us at [thatdasteband@gmail.com](mailto:thatdasteband@gmail.com).

Follow us on social media:
- [Spotify](https://open.spotify.com/artist/5uXWOfu1kA8mQ9bUp5GgxT)
- [Instagram](https://instagram.com/daste.music)
- [TikTok](https://tiktok.com/@daste.music)
- [Facebook](https://www.facebook.com/daste.music)
- [Twitter](https://x.com/dasteband)
- [YouTube](https://www.youtube.com/channel/UCOvwkCtPWz9rDC4rcNf303w)
- [SoundCloud](https://soundcloud.com/daste-music)
- [Bandcamp](https://daste.bandcamp.com/)
