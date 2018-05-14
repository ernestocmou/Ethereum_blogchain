<% if @comment.errors.any? %>
  <div id="error_explanation">
    <h2><%= pluralize(@review.errors.count, "error") %> prohibited comment from being saved:</h2>

    <ul>
    <% @comment.errors.full_messages.each do |msg| %>
      <li><%= msg %></li>
    <% end %>
    </ul>
  </div>
<% end %>

<h1>New token <%= @token.name %> New comment</h1>

<%= form_for [@token, @comment] do |f| %>


  <div class="field">
    <%= f.label :body, 'Body' %><br />
    <%= f.text_area :body %>
  </div>

  <div class="actions">
    <%= f.submit 'Add Comment'%>
  </div>
<% end %>

===========

<!-- <% Token.each do |token|  %>
  <div>
    <li>
    <a href="token/<%=token['address']%>"><%= token["symbol"] %> </a>
  </li>
  </div>
<% end %> -->

====-=====

<h1>Name: <%= @response['name'] %></h1>

<h6>Symbol: <%= @response['symbol'] %></h6>
<h6>Address: <%= @response['address'] %></h6>
<h6>Price: <%= @response['price']['rate'] %> $ USA </h6>
<h6>Capitalization: <%= @response['price']['marketCapUsd'] %> $ USA </h6>
<h6>Total supply: <%= @response ['totalSupply']%> </h6>
<h6>Available supply: <%= @response ['price']['availableSupply']%> </h6>
<h6>Website: <%= @response ['description']%> </h6>

====================

<% if @comment.errors.any? %>
  <div id="error_explanation">
    <h2><%= pluralize(@review.errors.count, "error") %> prohibited comment from being saved:</h2>

    <ul>
    <% @comment.errors.full_messages.each do |msg| %>
      <li><%= msg %></li>
    <% end %>
    </ul>
  </div>
<% end %>

<h1>New token <%= @token.name %> New comment</h1>

<%= form_for [@token, @comment] do |f| %>


  <div class="field">
    <%= f.label :body, 'Body' %><br />
    <%= f.text_area :body %>
  </div>

  <div class="actions">
    <%= f.submit 'Add Comment'%>
  </div>
<% end %>

========

<%= form_for ([token, Comment.new] :remote = true) do |f| %>
<p>
<%= f.label :content, "New Comment" %><br/>
<%= f.text_area :content %>
</p>
<p><%= f.submit "Add Comment"%></p>
<% end %>

========

<% if @comment.errors.any? %>
  <div id="error_explanation">
    <h2><%= pluralize(@comment.errors.count, "error") %> prohibited comment from being saved:</h2>

    <ul>
    <% @comment.errors.full_messages.each do |msg| %>
      <li><%= msg %></li>
    <% end %>
    <% end %>
    </ul>
  </div>

<h1>New token <%= @token.name %> New comment</h1>

<%= form_for [@token, @comment] do |f| %>


  <div class="field">
    <%= f.label :body, 'Body' %><br />
    <%= f.text_area :body %>
  </div>

  <div class="actions">
    <%= f.submit 'Add Comment'%>
  </div>
<% end %>
