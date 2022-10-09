import {
  StatSection,
  StatTitle,
  StatList,
  Item,
  Label,
  Percentage,
} from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({ stats, title }) => {
  return (
    <StatSection>
      {title && <StatTitle>{title}</StatTitle>}
      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <Item key={id}>
            <Label>{label}</Label>
            <Percentage>{percentage}% </Percentage>
          </Item>
        ))}
      </StatList>
    </StatSection>
  );
};

Statistics.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
  title: PropTypes.string,
};
