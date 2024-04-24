import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useParams, useNavigate, useLocation } from 'react-router-dom';
import {
  Center, Text, Heading, Box, HStack, Flex, Grid, Button, Input, Td, Tr, Tbody, Table, Th, Thead, FormControl, Alert, FormLabel,
  AlertIcon, VStack, Menu, MenuItem, MenuList, MenuButton, Icon, Image
} from "@chakra-ui/react";

export default function NavBar({userData}){
const location = useLocation();  
const navigate = useNavigate( userData);
const handleNavigate = (path) => {
    navigate(path, { state: { userData } });
  };
console.log("path", location.pathname);
return(       
 <>
{ (location.pathname != '/homepage' && location.pathname != '/' && location.pathname != '/login' && location.pathname != '/carDetails')  &&(<>
  <Box zIndex="2" position="fixed"  left="0" top="0" w="100%">
    <nav className="navbar" >
      <ul className="nav-list">
        <li className="nav-item">
          <button className="nav-button" onClick={() => handleNavigate('/homepage')}>
            Home
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-button" onClick={() => handleNavigate('/ServiceHistory')}>
            Service History
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-button" onClick={() => handleNavigate('/Service')}>
            Schedule Service
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-button" onClick={() => handleNavigate('/carAccessories')}>
            Car Accessories
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-button" onClick={() => handleNavigate('/ModifyInfo')}>
            Modify Info
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-button" onClick={() => handleNavigate('/Cart')}>
            Cart
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-button" onClick={() => handleNavigate('/PastPurchase')}>
            Past Purchase
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-button" onClick={() => handleNavigate('/OwnCar')}>
            Personnal cars
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-button" onClick={() => handleNavigate('/TestDriveHistory')}>
            Test Drive status
          </button>
        </li> 
      </ul>
      </nav>
      </Box>
      <Box h="50px" w="100%"> </Box> </>
    )}
      </>
);
}
