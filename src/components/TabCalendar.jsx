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
        <TabPanel header={`Accepted (${count?.acceptedCount})`}></TabPanel>
        <TabPanel header={`Pending (${count?.pendingCount})`}></TabPanel>
        <TabPanel header={`Rejected (${count?.rejectedCount})`}></TabPanel>
      </TabView>
      <CalendarBlock count={count} />
    </Wrapper>
  );
};

export default TabCalendar;
