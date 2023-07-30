import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './Stepper.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faReact, faBootstrap, faNpm, faGitAlt } from '@fortawesome/free-brands-svg-icons';
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 5 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <React.Fragment>
            <h2 className="titleProyects" id='skills'>Skills</h2>
            <Box sx={{ width: '100%' }} className='boxContainer' >
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label={<FontAwesomeIcon icon={faHtml5} size='3x' />} {...a11yProps(0)}></Tab>
                        <Tab label={<FontAwesomeIcon icon={faCss3} size='3x' />} {...a11yProps(1)}></Tab>
                        <Tab label={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z" /></svg>} {...a11yProps(2)} />
                        <Tab label={<FontAwesomeIcon icon={faReact} size='3x' />} {...a11yProps(3)} />
                        <Tab label={<FontAwesomeIcon icon={faBootstrap} size='3x' />} {...a11yProps(4)} />
                        <Tab label={<FontAwesomeIcon icon={faNpm} size='3x' />} {...a11yProps(5)} />
                        <Tab label={<FontAwesomeIcon icon={faGitAlt} size='3x' />} {...a11yProps(6)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nulla possimus ad at! Deserunt officia error accusamus hic sed aperiam.
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nulla possimus ad at! Deserunt officia error accusamus hic sed aperiam.
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nulla possimus ad at! Deserunt officia error accusamus hic sed aperiam.
                </TabPanel>
                <TabPanel value={value} index={3}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nulla possimus ad at! Deserunt officia error accusamus hic sed aperiam.
                </TabPanel>
                <TabPanel value={value} index={4}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nulla possimus ad at! Deserunt officia error accusamus hic sed aperiam.
                </TabPanel>
                <TabPanel value={value} index={5}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nulla possimus ad at! Deserunt officia error accusamus hic sed aperiam.
                </TabPanel>
                <TabPanel value={value} index={6}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nulla possimus ad at! Deserunt officia error accusamus hic sed aperiam.
                </TabPanel>
            </Box>
            <div className="line"></div>
        </React.Fragment>

    );
}