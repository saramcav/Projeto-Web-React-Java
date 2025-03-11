import { TemaTab } from "../interfaces/interfaces";

interface Props {
  tabs: TemaTab[];
  tabAtiva: string;
  onTabClick: (tabId: string) => void;
}

const Tabs = ({ tabs, tabAtiva, onTabClick }: Props) => {
  return (
    <ul className="nav nav-tabs mb-4" role="tablist">
      {tabs.map((tab) => (
        <li className="nav-item" key={tab.id}>
          <button
            className={`nav-link ${tabAtiva === tab.id ? "active" : ""}`}
            id={`${tab.id}Tab`}
            data-bs-toggle="tab"
            data-bs-target={`#${tab.id}`}
            type="button"
            role="tab"
            aria-controls={tab.id}
            aria-selected={tabAtiva === tab.id}
            onClick={() => onTabClick(tab.id)}
          >
            {tab.rotulo}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Tabs;
