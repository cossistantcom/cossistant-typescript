# Organizations

Types:

- <code><a href="./src/resources/organizations.ts">OrganizationRetrieveIDResponse</a></code>

Methods:

- <code title="get /v1/organizations/:id">client.organizations.<a href="./src/resources/organizations.ts">retrieveID</a>() -> OrganizationRetrieveIDResponse</code>

# Websites

Types:

- <code><a href="./src/resources/websites.ts">WebsiteRetrieveResponse</a></code>

Methods:

- <code title="get /v1/websites">client.websites.<a href="./src/resources/websites.ts">retrieve</a>({ ...params }) -> WebsiteRetrieveResponse</code>

# Messages

Types:

- <code><a href="./src/resources/messages.ts">MessageSendResponse</a></code>

Methods:

- <code title="post /v1/messages">client.messages.<a href="./src/resources/messages.ts">send</a>({ ...params }) -> MessageSendResponse</code>

# Conversations

Types:

- <code><a href="./src/resources/conversations/conversations.ts">ConversationCreateResponse</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">ConversationRetrieveResponse</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">ConversationListResponse</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">ConversationGetTimelineResponse</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">ConversationReportTypingResponse</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">ConversationSubmitRatingResponse</a></code>

Methods:

- <code title="post /v1/conversations">client.conversations.<a href="./src/resources/conversations/conversations.ts">create</a>({ ...params }) -> ConversationCreateResponse</code>
- <code title="get /v1/conversations/{conversationId}">client.conversations.<a href="./src/resources/conversations/conversations.ts">retrieve</a>(conversationID, { ...params }) -> ConversationRetrieveResponse</code>
- <code title="get /v1/conversations">client.conversations.<a href="./src/resources/conversations/conversations.ts">list</a>({ ...params }) -> ConversationListResponse</code>
- <code title="get /v1/conversations/{conversationId}/timeline">client.conversations.<a href="./src/resources/conversations/conversations.ts">getTimeline</a>(conversationID, { ...params }) -> ConversationGetTimelineResponse</code>
- <code title="post /v1/conversations/{conversationId}/typing">client.conversations.<a href="./src/resources/conversations/conversations.ts">reportTyping</a>(conversationID, { ...params }) -> ConversationReportTypingResponse</code>
- <code title="post /v1/conversations/{conversationId}/rating">client.conversations.<a href="./src/resources/conversations/conversations.ts">submitRating</a>(conversationID, { ...params }) -> ConversationSubmitRatingResponse</code>

## Seen

Types:

- <code><a href="./src/resources/conversations/seen.ts">SeenGetSeenDataResponse</a></code>
- <code><a href="./src/resources/conversations/seen.ts">SeenMarkAsSeenResponse</a></code>

Methods:

- <code title="get /v1/conversations/{conversationId}/seen">client.conversations.seen.<a href="./src/resources/conversations/seen.ts">getSeenData</a>(conversationID) -> SeenGetSeenDataResponse</code>
- <code title="post /v1/conversations/{conversationId}/seen">client.conversations.seen.<a href="./src/resources/conversations/seen.ts">markAsSeen</a>(conversationID, { ...params }) -> SeenMarkAsSeenResponse</code>

# Visitors

## ID

Types:

- <code><a href="./src/resources/visitors/id.ts">IDRetrieveIDResponse</a></code>
- <code><a href="./src/resources/visitors/id.ts">IDUpdateIDResponse</a></code>
- <code><a href="./src/resources/visitors/id.ts">IDUpdateMetadataResponse</a></code>

Methods:

- <code title="get /v1/visitors/:id">client.visitors.id.<a href="./src/resources/visitors/id.ts">retrieveID</a>() -> IDRetrieveIDResponse</code>
- <code title="patch /v1/visitors/:id">client.visitors.id.<a href="./src/resources/visitors/id.ts">updateID</a>({ ...params }) -> IDUpdateIDResponse</code>
- <code title="patch /v1/visitors/:id/metadata">client.visitors.id.<a href="./src/resources/visitors/id.ts">updateMetadata</a>({ ...params }) -> IDUpdateMetadataResponse</code>

# Contacts

Types:

- <code><a href="./src/resources/contacts/contacts.ts">ContactCreateResponse</a></code>
- <code><a href="./src/resources/contacts/contacts.ts">ContactIdentifyResponse</a></code>

Methods:

- <code title="post /v1/contacts">client.contacts.<a href="./src/resources/contacts/contacts.ts">create</a>({ ...params }) -> ContactCreateResponse</code>
- <code title="post /v1/contacts/identify">client.contacts.<a href="./src/resources/contacts/contacts.ts">identify</a>({ ...params }) -> ContactIdentifyResponse</code>

## Organizations

Types:

- <code><a href="./src/resources/contacts/organizations/organizations.ts">OrganizationCreateResponse</a></code>

Methods:

- <code title="post /v1/contacts/organizations">client.contacts.organizations.<a href="./src/resources/contacts/organizations/organizations.ts">create</a>({ ...params }) -> OrganizationCreateResponse</code>

### ID

Types:

- <code><a href="./src/resources/contacts/organizations/id.ts">IDRetrieveIDResponse</a></code>
- <code><a href="./src/resources/contacts/organizations/id.ts">IDUpdateIDResponse</a></code>

Methods:

- <code title="delete /v1/contacts/organizations/:id">client.contacts.organizations.id.<a href="./src/resources/contacts/organizations/id.ts">deleteID</a>() -> void</code>
- <code title="get /v1/contacts/organizations/:id">client.contacts.organizations.id.<a href="./src/resources/contacts/organizations/id.ts">retrieveID</a>() -> IDRetrieveIDResponse</code>
- <code title="patch /v1/contacts/organizations/:id">client.contacts.organizations.id.<a href="./src/resources/contacts/organizations/id.ts">updateID</a>({ ...params }) -> IDUpdateIDResponse</code>

## ID

Types:

- <code><a href="./src/resources/contacts/id.ts">IDRetrieveIDResponse</a></code>
- <code><a href="./src/resources/contacts/id.ts">IDUpdateIDResponse</a></code>
- <code><a href="./src/resources/contacts/id.ts">IDUpdateMetadataResponse</a></code>

Methods:

- <code title="delete /v1/contacts/:id">client.contacts.id.<a href="./src/resources/contacts/id.ts">deleteID</a>() -> void</code>
- <code title="get /v1/contacts/:id">client.contacts.id.<a href="./src/resources/contacts/id.ts">retrieveID</a>() -> IDRetrieveIDResponse</code>
- <code title="patch /v1/contacts/:id">client.contacts.id.<a href="./src/resources/contacts/id.ts">updateID</a>({ ...params }) -> IDUpdateIDResponse</code>
- <code title="patch /v1/contacts/:id/metadata">client.contacts.id.<a href="./src/resources/contacts/id.ts">updateMetadata</a>({ ...params }) -> IDUpdateMetadataResponse</code>

# Uploads

Types:

- <code><a href="./src/resources/uploads.ts">UploadCreateSignURLResponse</a></code>

Methods:

- <code title="post /v1/uploads/sign-url">client.uploads.<a href="./src/resources/uploads.ts">createSignURL</a>({ ...params }) -> UploadCreateSignURLResponse</code>

# Knowledge

Types:

- <code><a href="./src/resources/knowledge/knowledge.ts">KnowledgeCreateResponse</a></code>
- <code><a href="./src/resources/knowledge/knowledge.ts">KnowledgeListResponse</a></code>

Methods:

- <code title="post /v1/knowledge">client.knowledge.<a href="./src/resources/knowledge/knowledge.ts">create</a>({ ...params }) -> KnowledgeCreateResponse</code>
- <code title="get /v1/knowledge">client.knowledge.<a href="./src/resources/knowledge/knowledge.ts">list</a>({ ...params }) -> KnowledgeListResponse</code>

## ID

Types:

- <code><a href="./src/resources/knowledge/id.ts">IDRetrieveIDResponse</a></code>
- <code><a href="./src/resources/knowledge/id.ts">IDUpdateIDResponse</a></code>

Methods:

- <code title="delete /v1/knowledge/:id">client.knowledge.id.<a href="./src/resources/knowledge/id.ts">deleteID</a>() -> void</code>
- <code title="get /v1/knowledge/:id">client.knowledge.id.<a href="./src/resources/knowledge/id.ts">retrieveID</a>() -> IDRetrieveIDResponse</code>
- <code title="patch /v1/knowledge/:id">client.knowledge.id.<a href="./src/resources/knowledge/id.ts">updateID</a>({ ...params }) -> IDUpdateIDResponse</code>

# Feedback

Types:

- <code><a href="./src/resources/feedback.ts">FeedbackListResponse</a></code>
- <code><a href="./src/resources/feedback.ts">FeedbackRetrieveIDResponse</a></code>
- <code><a href="./src/resources/feedback.ts">FeedbackSubmitResponse</a></code>

Methods:

- <code title="get /v1/feedback">client.feedback.<a href="./src/resources/feedback.ts">list</a>({ ...params }) -> FeedbackListResponse</code>
- <code title="get /v1/feedback/:id">client.feedback.<a href="./src/resources/feedback.ts">retrieveID</a>() -> FeedbackRetrieveIDResponse</code>
- <code title="post /v1/feedback">client.feedback.<a href="./src/resources/feedback.ts">submit</a>({ ...params }) -> FeedbackSubmitResponse</code>
