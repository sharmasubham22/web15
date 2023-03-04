import * as React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { FormControl, FormGroup, Input, InputLabel} from '@mui/material';

export default function ColorTextFields() {
  const handleFileUpload = (event) => {
    console.log(event.target.files[0]); // do something with the uploaded file
  };

  return (
    <>
      <div>
        <div>
          <>
            <Container maxWidth="l">
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                </Grid>
              </Grid>
            </Container>
          </>
          <br />
          
        </div>
        <Container sx={{ py: 8 }} maxWidth="md">
          <h1>Add Blog</h1>
          <FormGroup>
            <FormControl sx={{ marginBottom: '1rem' }}>
              <InputLabel>Title</InputLabel>
              <Input />
            </FormControl>

            <FormControl sx={{ marginBottom: '1rem' }}>
              <InputLabel>Content</InputLabel>
              <Input />
            </FormControl>

            <FormControl sx={{ marginBottom: '1rem' }}>
              {/* <InputLabel>Add Image</InputLabel> */}
              <Input type="file" onChange={handleFileUpload} />
            </FormControl>

            <Button variant='contained'>Submit</Button>
          </FormGroup>
        </Container>
      </div>
    </>
  );
}
