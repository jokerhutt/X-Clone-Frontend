import { useEffect, useState } from 'react';
import './App.css'
import FooterBar from './component/Layout/FooterBar'
import Header from './component/Layout/Header';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from "react-router-dom";
import HomePage from './component/Layout/HomePage';
import ProfilePage from './component/Layout/ProfilePage';
import { ModalProvider } from './context/misc/ModalProvider';
import ModalManager from './component/Modal/ModalManager';
import { CurrentUserProvider } from './context/currentUser/CurrentUserProvider';
import type { User } from './types/User';
import { UserCacheProvider } from './context/cache/UserCacheProvider';
import { PostCacheProvider } from './context/cache/PostCacheProvider';
import { FeedProvider } from './context/feed/FeedContext';
import BookmarkPage from './component/Layout/BookmarkPage';
import NotificationPage from './component/Layout/NotificationPage';
import { PageUserProvider } from './context/currentUser/PageUserContext';
import TweetPreview from './component/Layout/TweetPreview';



function App() {


  return (
    <Router>
      <CurrentUserProvider>
        <ModalProvider>
        <UserCacheProvider>
        <PostCacheProvider>
        <FeedProvider>
        <ModalManager />

        <div className="overscroll-y-contain w-dvw h-dvh max-h-dvh max-w-dvw bg-[var(--background-main)] text-[var(--color-main)] transition-colors duration-300 flex flex-col">

          <div>
            <Header/>
          </div>

          {/* <div>
            <TabList/>
          </div> */}

        <div className='flex-grow overflow-hidden flex flex-col'>
        <Routes>

        <Route
        path=""
        element={
          <HomePage/>
        }
        />

        <Route
          path="profile/:ID"
          element={
            <ProfilePage />
          }
        />

        <Route
          path="tweet/:ID"
          element={
            <TweetPreview />
          }
        />

        <Route
        path="bookmarks"
        element={
          <BookmarkPage/>
        }
        />

        <Route
        path="notifications"
        element={
          <NotificationPage/>
        }
        />



        </Routes>
        </div>

          <div className=''>
            <FooterBar/>
          </div>

        </div>
        </FeedProvider>
        </PostCacheProvider>
        </UserCacheProvider>
        </ModalProvider>
      </CurrentUserProvider>
    </Router>
  );
}

export default App
