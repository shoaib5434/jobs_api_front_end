import logo from './logo.svg';
import { TableContainer,Table,TableHead,TableBody,TableRow,TableCell,Button } from '@mui/material'
import './App.css';
import axios from 'axios';
import {useState,useEffect} from 'react'

function App() {
  /*
    Fetch Data
  */
  let [loading,setLoading] = useState(false);
  let [data,setData] = useState([])
  let AllJobs = [];
  useEffect(() => {
    const loadData = async () => {
      setLoading(true)

      const response = await axios.get("https://jobs-api-by-shoaib.herokuapp.com/jobs");

      setData(response.data)

      setLoading(false)
    }
    loadData()
  },[])
  // Mock Data
  AllJobs.push({
    title : "QA Intern",
    company : "VentureDive",
    location : "Remote",
    apply_link : "https://venturedive.com"
  })
  loading ? console.log("Loading") : console.log(data)
  // axios.get("https://jobs-api-by-shoaib.herokuapp.com/jobs").then(res => console.log(res.data)).catch(err => console.log(err))
  // /* Render Data */
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              Title
            </TableCell>
            <TableCell>
              Company
            </TableCell>
            <TableCell>
              Location
            </TableCell>
            <TableCell>
              Apply
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {
          loading ? (<TableRow> <TableCell> Loading </TableCell> </TableRow>) : (
          data.map((job) =>
            (
              <TableRow>
                <TableCell>
                  {job.title}
                </TableCell>
                <TableCell>
                  {job.comapnyname}
                </TableCell>
                <TableCell>
                  {job.location}
                </TableCell>
                <TableCell>
                  <Button href={job.apply_link} variant="contained">
                    Apply
                  </Button>
                </TableCell>
              </TableRow>
            )
          )
          )
        }
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default App;
