import React, { FC, useState } from "react";
import { Tab, Tabs } from "@mui/material";
import styled from "@emotion/styled";

export interface TabType {
    value: string;
    label: string;
    icon?: any;
    title?: string;
    description?: string;
    button?: string;
    link?: string;
    color?: string;
    image?: string;
}

export interface TabsType {
    tabs: TabType[],
    defaultValue?: string;
    onChange?: (tab: TabType) => void;

}

const IconTab: FC<TabsType> = (props) => {
    const { tabs, defaultValue, onChange } = props
    const [tab, setTab] = useState<string>(defaultValue || "");

    const tabChange = (event: React.SyntheticEvent, newValue: string) => {
        setTab(newValue);
        if (onChange) {
            onChange(tabs.filter((i) => i.value === newValue)[0])
        }
    }

    return (
        <CustomTabs
            value={tab}
            onChange={tabChange}
            variant="scrollable"
            textColor="primary"
            indicatorColor="primary">
            {
                tabs.map((t, i) => (
                    <Tab
                        key={`service-tab-${t.value}`}
                        icon={t.icon}
                        iconPosition="start"
                        id={`service-tab-${i}`}
                        value={t.value}
                        label={t.label} />
                ))
            }
        </CustomTabs>
    );
};


const CustomTabs = styled(Tabs)`
  border-bottom: 1px solid #aaa;
  button {
    min-height: 48px;
    line-height: 1;
  }
`

export default IconTab;
