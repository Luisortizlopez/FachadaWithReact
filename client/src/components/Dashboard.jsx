import React, { PropTypes } from 'react';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import FontIcon from 'material-ui/FontIcon';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import {blue300,indigo900,orange200,deepOrange300,pink400,purple500} from 'material-ui/styles/colors';
import {Table,TableBody,TableHeader,TableHeaderColumn,TableRow,TableRowColumn,} from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const style = {margin: 5};

const styles = {
  width: '25%',
  height: '50%',
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

const Dashboard = () => (
  <div>
    <ListItem className="avt"
      disabled={true}
      leftAvatar={
        <Avatar
          src="../css/7a6bd4465d9c28213edb2bcae4a549bc.jpg"
          size={150}
          style={style}
        />
      }
    >
    </ListItem>

<br />
    <br />
      <Paper style={styles} className="Desc">

          <div className="field-line">
            <TextField
       floatingLabelText="Description"
       multiLine={true}
       rows={2}
       rowsMax={4}
     />
        </div>
      </Paper>

      <br />
          <br />

      <div className="Post">
        <RaisedButton type="submit" label="Post" backgroundColor=" #808080" style={styleb} />
      </div>

</div>
);



export default Dashboard;
