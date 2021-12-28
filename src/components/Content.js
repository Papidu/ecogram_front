import React from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window'
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import { ListItemButton } from '@mui/material';

function renderRow(props) {
    const { index, style } = props;
  
    return (
    //   <ListItem style={style} key={index} component="div" disablePadding>
        <ListItem
            key={index}
            secondaryAction={
            <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
            </IconButton>
            }
        >
           <ListItemButton>
                    Single-line item
           </ListItemButton>
        </ListItem>
    );
  }

function Content() {
    return (
        <FixedSizeList
            height={400}
            // width={360}
            itemSize={5}
            itemCount={6}
            overscanCount={5}
            style={{borderWidth: 10, backgroundColor: 'gold'}}
        >
            {renderRow}
        </FixedSizeList>
    )
}

export default Content
