
import {
  EuiText,
  EuiCard,
  EuiPageTemplate,
  EuiPageHeader,
  EuiPageSidebar,
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
} from '@elastic/eui';

  
export const sidebar = (
    <>
      <EuiCollapsibleNavGroup
        title="News"
        iconType="article"
        iconSize="m"
        titleSize="xxs"
        isCollapsible={true}
        initialIsOpen={true}
        background="dark"
      >
        <EuiText size="xs" color="subdued">
          <p>Latest news</p>
        </EuiText>
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
        <EuiText size="xs" color="subdued">
          <p>Team Schedule</p>
        </EuiText>
        <EuiSpacer size="s"/>
        <EuiText size="xs" color="subdued">
          <p>Watch Parties</p>
        </EuiText>
        <EuiSpacer size="s"/>
      </EuiCollapsibleNavGroup>

      <EuiCollapsibleNavGroup
        title="Account Settings"
        iconType="gear"
        iconSize="m"
        titleSize="xxs"
        isCollapsible={true}
        initialIsOpen={true}
        background="dark"
      >
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
        <EuiText size="xs" color="subdued">
          <p>Articles</p>
        </EuiText>
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
    </>
  )