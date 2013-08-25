class User
  def initialize(attribute_hash={})
    @attrs = attribute_hash
  end

  def method_missing(method, *args, &block)
    method = method.to_s
    if @attrs.key?(method)
      return @attrs[method]
    else
      format = method.split("_").map { |it| it.capitalize }.join(" ")
      return "<span class='js-define highlighted' title='#{format}'>#{format}</span>"
    end
  end
end
