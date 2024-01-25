import { TabView, TabPanel } from "primereact/tabview";
import styled from "styled-components";
import CalendarBlock from "./CalendarBlock";

const Wrapper = styled.div`
  .p-tabview {
    .p-tabview-nav {
      justify-content: center;
    }
  }
`;

const TabCalendar = ({ count }) => {
  return (
    <Wrapper>
      <TabView>
        <TabPanel header="Accepted (89)">
          {/* <CalendarBlock /> */}
        </TabPanel>
        <TabPanel header="Pending (8)">{/* <CalendarBlock /> */}</TabPanel>
        <TabPanel header="Rejected (5)">{/* <CalendarBlock /> */}</TabPanel>
      </TabView>
      <CalendarBlock />
    </Wrapper>
  );
};

export default TabCalendar;
