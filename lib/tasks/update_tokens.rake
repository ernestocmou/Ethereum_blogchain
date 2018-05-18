namespace :tokens do
  desc "TODO"
  task update: :environment do
    puts "hello"
    response = HTTParty.get("https://api.ethplorer.io/getTop?apiKey=freekey&criteria=cap", :headers =>{'Content-Type' => 'application/json'})

    # iterate over the response

    response["tokens"].each do |token|
      # create a Token object for each token in your response
      db_token = Token.find_by(name: token["name"])
      if db_token
        db_token.update_attributes(
          price:token['price']['rate'],
          capitalization:token['price']['marketCapUsd'],
          totalSupply:token['totalSupply'],
          availableSupply:token['price']['availableSupply']
        )
      else
        Token.create(
          name:token["name"],
          symbol:token['symbol'],
          address:token['address'],
          price:token['price']['rate'],
          capitalization:token['price']['marketCapUsd'],
          totalSupply:token['totalSupply'],
          availableSupply:token['price']['availableSupply'],
          description:token['description']
        )
      end
    end
  end
end
