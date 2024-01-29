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
  console.log("count", count);
  return (
    <Wrapper>
      <TabView
      >
        {/* className={
          count?.acceptedCount
            ? count?.acceptedCount
            : count?.pendingCount
            ? count?.pendingCount
            : count?.rejectedCount
            ? count?.rejectedCount
            : ""
        } */}
        <TabPanel header={`Accepted (${count?.acceptedCount})`}></TabPanel>
        <TabPanel header={`Pending (${count?.pendingCount})`}></TabPanel>
        <TabPanel header={`Rejected (${count?.rejectedCount})`}></TabPanel>
      </TabView>
      <CalendarBlock />
    </Wrapper>
  );
};

export default TabCalendar;
