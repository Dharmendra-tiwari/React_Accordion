/* eslint-disable @typescript-eslint/no-explicit-any */
export const Faq = ({ curData, isActive, onToggle }: any) => {
  const { question, answer } = curData;
  return (
    <li>
      <div className="faqQuest">
        <h3>{question}</h3>
        <button type="submit" onClick={onToggle} className={isActive ? "active-btn" : ""}>
          {isActive ? "Close" : "Show"}
        </button>
      </div>
      <p className={isActive ? "mt-3" : ""}> {isActive && answer}</p>
    </li>
  );
};
