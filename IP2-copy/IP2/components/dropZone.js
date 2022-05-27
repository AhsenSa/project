/*import { Grade } from '@mui/icons-material';
import { Container, Grid } from '@mui/material';
import { DropzoneArea } from 'material-ui-dropzone';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { AttachFile } from '@material-ui/icons';
import { useState } from 'react';

const useStyles = makeStyles(theme => createStyles({
  previewChip: {
    minWidth: 250,
    maxWidth: 300
  },
}));

 
  const DropZone = () =>{

    const classes = useStyles();
    const [open, setOpen] = useState(false);
   
   return (
     
   <Grid sx={{mt: 0 , p: 1}}>
    <DropzoneArea  
    acceptedFiles={['image/*', 'video/*']}
    dropzoneText={"Drag and drop an image here or click"}
    //onChange={(files) => console.log('Files:', files)}
    filesLimit ={20}
    cancelButtonText={"cancel"}
    submitButtonText={"submit"}
    showPreviews={true}
    showPreviewsInDropzone={false}
    previewGridProps={{container: { spacing: 1, direction: 'row' }}}
    previewChipProps={{classes: { root: classes.previewChip } }}
    previewText="Uploaded files"
    maxFileSize= {3000000000000}
    showFileNames = {true}
    showFileNamesInPreview = {false}
    showAlerts = {false}
    fullWidth= {true} 
    
    /**
    onAdd={(fileObjs) => console.log('Added Files:', fileObjs)}
    onDelete={(fileObj) => console.log('Removed File:', fileObj)}
    onAlert={(message, variant) => console.log(`${variant}: ${message}`)}
   // Icon={AttachFile}
    disableRejectionFeedback = {false}
    
   

  />
  </Grid>
   )
   
};

export default DropZone;*/