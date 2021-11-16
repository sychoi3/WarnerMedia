import React from 'react'
import {Routes, Route } from 'react-router-dom';

import Title from "../Title";
import Titles from "../Titles";
import { ROOT, TITLES } from "./CONSTANTS";
import NotFound from './NotFound';


export default function RouterConfig(){

    return (
      <>
        <Routes>
          <Route exact path={ROOT} element={<Titles />} />
          <Route path={TITLES} element={<Titles />}></Route>
          <Route exact path={`${TITLES}/:titleId`} element={<Title />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    );
}