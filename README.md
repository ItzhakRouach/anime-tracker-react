# 🦊 Anime Tracker

A modern, persistent anime tracking application built with React and Tailwind CSS. Users can search for top anime, add favorites to a personal list, and revisit their list across browser sessions.

# App source

animetrackerreact.netlify.app

## ✨ Features

- **🔍 Search Functionality:** Dynamic search for anime powered by the Jikan API.
- **💾 Client-Side Persistence:** Anime list is saved locally using `localStorage` and persists across page refreshes.
- **🛡️ Duplicate Prevention:** Logic to prevent users from adding the same anime multiple times.
- **♻️ Component Reuse & Routing:** Clean navigation between Search (`/`) and My List (`/my-list`) using `react-router-dom`.
- **🗑️ Remove Functionality:** Easily remove saved anime from the list.

## 🛠️ Technologies Used

| Tool                 | Purpose                      |
| :------------------- | :--------------------------- |
| **React**            | Front-end Library            |
| **react-router-dom** | Declarative Routing (v6)     |
| **Tailwind CSS**     | Utility-First Styling        |
| **Jikan API**        | Anime Data Source            |
| **localStorage**     | Client-Side Data Persistence |

## 🚀 Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

- Node.js (LTS version)
- npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone [YOUR_REPO_URL_HERE]
    ```
2.  Navigate to the project directory:
    ```bash
    cd anime-tracker
    ```
3.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

### Running the App

Run the development server:

```bash
npm run dev
# or
yarn dev

```
