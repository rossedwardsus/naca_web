import React from "react";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

export interface MyComponentProps {
    prop1: boolean;
    prop2?: string;
    prop3?: string;
}

export const ChooseList: React.SFC = (props: any) => (
		<div>
		{"this.props.list_id" == "this.props.list_id" ? 
	            <Select
	              value={props.list_id}
	              onChange={(event: any) => props.onListChange(event)}
	              inputProps={{
	                name: 'List',
	                id: 'age-simple',
	              }}
	              className={props.classes.textField}
	            >
	              <MenuItem value="">
	                <em>None</em>
	              </MenuItem>
	              
	              {props.list_names_id.map((list: any) => <MenuItem value={list.list_id}>{list.name}</MenuItem>)}
	              
	            </Select> : <div>props.list_name</div>}
	    </div>)