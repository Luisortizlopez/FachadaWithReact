import React, { PropTypes } from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
position: "relative",
top: "0px",
left: "130px",
width: "65%",
}

const style2={
  width: "65%",
}
const styleavt = {
  position: "relative",
  top: "90px",
}

const styleb ={
  position: "relative",
  top: "-20px",
  left: "390px",
  width: "25%",
  marginRight: "5px",
  marginLeft: "10px",
  borderColor: "#0000000",
  border: "3px",
}


const iconButtonElement = (
  <IconButton
    touch={true}
    tooltip="more"
    tooltipPosition="bottom-left"
  >
    <MoreVertIcon color={grey400} />
  </IconButton>
);

const rightIconMenu = (
  <IconMenu iconButtonElement={iconButtonElement}>
    <MenuItem <RaisedButton type="submit" label="Post" backgroundColor=" #808080" style={styleb} />Reply</MenuItem>
    <MenuItem>Forward</MenuItem>
    <MenuItem>Delete</MenuItem>
  </IconMenu>
);


const Dashboard = () => (
  <div>

       <List>
         <Subheader>Today</Subheader>
         <div> <Avatar style={styleavt} size={80} src="../css/marco.jpg" /> </div>
         <ListItem
           rightIconButton={rightIconMenu}
           style={style}
           primaryText="Marco Castillo"
           secondaryText={
             <p>
               <span style={{color: darkBlack}}>Job Description</span><br />
               I&apos;ll be needing to paint my newly remodeled garage this weekend. Anyone interested, please contact me asap.
             </p>
           }
           secondaryTextLines={2}
         />
       <Divider style={style2} inset={true} />
         <div><Avatar style={styleavt} size={80} src="../css/mando.jpg" /></div>
         <ListItem
            style={style}
           rightIconButton={rightIconMenu}
           primaryText="Armando Cano"
           secondaryText={
             <p>
               <span style={{color: darkBlack}}>Job Description</span><br />
               Wish I could come, but I&apos;m out of town this weekend.
             </p>
           }
           secondaryTextLines={2}
         />
         <Divider style={style2} inset={true} />
         <div><Avatar style={styleavt} size={80} src="../css/alex.jpg" /></div>
         <ListItem
            style={style}
           rightIconButton={rightIconMenu}
           primaryText="Alex Castillo"
           secondaryText={
             <p>
               <span style={{color: darkBlack}}>Job Description</span><br />
               Do you have any Paris recs? Have you ever been?
             </p>
           }
           secondaryTextLines={2}
         />
         <Divider style={style2} inset={true} />
         <div><Avatar style={styleavt} size={80} src="../css/nando.jpg" /></div>
         <ListItem
          style={style}
           rightIconButton={rightIconMenu}
           primaryText="Fernado Ortiz"
           secondaryText={
             <p>
               <span style={{color: darkBlack}}>Job Description</span><br />
               Do you have any ideas what we can get Heidi for her birthday? How about a pony?
             </p>
           }
           secondaryTextLines={2}
         />
         <Divider style={style2} inset={true} />
         <div><Avatar style={styleavt} size={80} src="../css/lalo.jpg" /></div>
         <ListItem
           style={style}
           rightIconButton={rightIconMenu}
           primaryText="Luis Avila"
           secondaryText={
             <p>
               <span style={{color: darkBlack}}>Job Description</span><br />
               We should eat this: grated squash. Corn and tomatillo tacos.
             </p>
           }
           secondaryTextLines={2}
         />
       </List>
   </div>
);

<div className="Post">
  <RaisedButton type="submit" label="Post" backgroundColor=" #808080" style={styleb} />
</div>


export default Dashboard;
