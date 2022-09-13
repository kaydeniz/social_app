import './App.css';
import CustomCard from "./Components/CustomCard";
import {Grid} from "@mui/material";
import data from "./data/data.json";

function App() {
    const list = data.posts_by_date["2021-06-17"]
    console.log(list);

    return (
        <div className="App">
            <Grid container style={{padding: 40}}>
                {list.map((item) => (
                    <Grid style={{padding: 10}} item xs={12} sm={6} md={4} lg={3} xl={2}>
                        <CustomCard details={item}/>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default App;
