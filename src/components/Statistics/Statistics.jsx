import { Container, Title, List, Item, Label, Percentage } from './Statistics.styled';
import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
    return (
        <Container>
            <Title>{title}</Title>

            <List>
                {stats.map(({ id, label, percentage }) => (
                    <Item key={id}>
                        <Label>{label}</Label>
                        <Percentage>{percentage}%</Percentage>
                    </Item>
                ))}
            </List>
        </Container>
    );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

export default Statistics