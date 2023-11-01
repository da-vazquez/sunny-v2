import {
  EuiText,
  EuiCard,
  EuiPageTemplate,
  EuiPageHeader,
  EuiListGroup,
  EuiListGroupItem,
  EuiIcon,
  EuiPanel,
  EuiCollapsibleNavGroup,
  EuiSpacer,
  EuiImage,
  EuiBetaBadge,
  EuiFlexGroup,
  EuiFlexItem,
  EuiHideFor,
} from '@elastic/eui';
import { Link, Routes, Route } from 'react-router-dom';

export const sidebar = (
  <>
    <EuiHideFor sizes={['s', 'm']}>
      <Link to="/">
        <EuiCollapsibleNavGroup
          title="Overview"
          iconType="dashboardApp"
          isCollapsible={true}
          arrowDisplay="none"
          onClick={() => {}}
          initialIsOpen={true}
        >
          {/* Content for Overview goes here */}
        </EuiCollapsibleNavGroup>
      </Link>

      <EuiCollapsibleNavGroup
        title="News"
        iconType="article"
        iconSize="m"
        titleSize="xxs"
        isCollapsible={true}
        initialIsOpen={true}
        background="dark"
      >
        {/* Content for News goes here */}
        <Link to="/newsfeed">
          <EuiText size="xs" color="subdued">
            <p>Latest news</p>
          </EuiText>
        </Link>
        
        <EuiSpacer size="s"/>
        
        <EuiText size="xs" color="subdued">
          <p>Trade Rumors</p>
        </EuiText>
      </EuiCollapsibleNavGroup>

      <EuiCollapsibleNavGroup
        title="Stats"
        iconType="stats"
        iconSize="m"
        titleSize="xxs"
        isCollapsible={true}
        initialIsOpen={true}
        background="dark"
      >
        {/* Content for Stats goes here */}
        <EuiText size="xs" color="subdued">
          <p>Player Stats</p>
        </EuiText>
        <EuiSpacer size="s"/>
        <EuiText size="xs" color="subdued">
          <p>Team Stats</p>
        </EuiText>
        <EuiSpacer size="s"/>
        <EuiText size="xs" color="subdued">
          <p>Live Stats</p>
        </EuiText>
      </EuiCollapsibleNavGroup>

      <EuiCollapsibleNavGroup
        title="Social"
        iconType="discuss"
        iconSize="m"
        titleSize="xxs"
        isCollapsible={true}
        initialIsOpen={true}
        background="dark"
      >
        {/* Content for Social goes here */}
        <EuiText size="xs" color="subdued">
          <p>View Messages</p>
        </EuiText>
        <EuiSpacer size="s"/>
        <EuiText size="xs" color="subdued">
          <p>Create a new post</p>
        </EuiText>
        <EuiSpacer size="s"/>
        <EuiText size="xs" color="subdued">
          <p>Discussions</p>
        </EuiText>
      </EuiCollapsibleNavGroup>

      <EuiCollapsibleNavGroup
        title="Schedule"
        iconType="calendar"
        iconSize="m"
        titleSize="xxs"
        isCollapsible={true}
        initialIsOpen={true}
        background="dark"
      >
        {/* Content for Schedule goes here */}
        <EuiText size="xs" color="subdued">
          <p>Team Schedule</p>
        </EuiText>
        <EuiSpacer size="s"/>
        <EuiText size="xs" color="subdued">
          <p>Watch Parties</p>
        </EuiText>
      </EuiCollapsibleNavGroup>

      <EuiCollapsibleNavGroup
        title="Account"
        iconType="gear"
        iconSize="m"
        titleSize="xxs"
        isCollapsible={true}
        initialIsOpen={true}
        background="dark"
      >
        {/* Content for Account Settings goes here */}
        <EuiText size="xs" color="subdued">
          <p>Change username / password</p>
        </EuiText>
        <EuiSpacer size="s"/>
        <EuiText size="xs" color="subdued">
          <p>Manage preferences</p>
        </EuiText>
      </EuiCollapsibleNavGroup>

      <EuiCollapsibleNavGroup
        title="Admin"
        iconType="users"
        iconSize="m"
        titleSize="xxs"
        isCollapsible={true}
        initialIsOpen={true}
        background="dark"
      >
        {/* Content for Admin goes here */}
        <Link to="/admin/create_article">
          <EuiText size="xs" color="subdued">
            <p>Articles</p>
          </EuiText>
        </Link>
        <EuiSpacer size="s"/>
        <EuiText size="xs" color="subdued">
          <p>Users</p>
        </EuiText>
        <EuiSpacer size="s"/>
        <EuiText size="xs" color="subdued">
          <p>API Status</p>
        </EuiText>
        <EuiSpacer size="s"/>
        <EuiText size="xs" color="subdued">
          <p>Events</p>
        </EuiText>
        <EuiSpacer size="s"/>
      </EuiCollapsibleNavGroup>
    </EuiHideFor>
  </>
);
